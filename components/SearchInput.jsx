
import { createAutocomplete } from '@algolia/autocomplete-core'
import { useMemo, useRef, useState } from 'react'
import Link from 'next/link'

const AutocompleteItems = ({ title, description, slug }) => {
    return (
        <li>
            <Link href={`/blog/${slug}`} passHref>
                <a className="flex items-center gap-2 border-b">
                    <div className="overflow-hidden px-4">
                        <h4 className="font-semibold text-xl"> {title} </h4>
                        <p className="text-ellipsis"> {description} </p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default function SearchInput({ props }) {

    const [autocompleteState, setAutocompleteState] = useState({
        collections: [],
        isOpen: false
    })

    const autocomplete = useMemo(() => createAutocomplete({
        placeholder: 'Búsqueda',
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: () => [{
            sourceId: 'post-api-next',
            getItems: ({ query }) => {
                if (!!query) {
                    return fetch(`/api/search?q=${query}`)
                        .then((res) => res.json())
                }
            }
        }],
        ...props
    }), [props])

    const formRef = useRef(null)
    const inputRef = useRef(null)
    const panelRef = useRef(null)

    const formProps = autocomplete.getFormProps({
        inputElement: inputRef.current
    })

    const inputProps = autocomplete.getInputProps({
        inputElement: inputRef.current
    })

    return (
        <form className="sticky top-12 py-2 z-[1] bg-neutral-50" ref={formRef} {...formProps} >
            <div>
                <input className="w-full" ref={inputRef} {...inputProps} />
            </div>
            <div>
                {
                    autocompleteState.isOpen && (
                        <div className="bg-gray-100 mt-2 py-2 rounded-md w-full overflow-hidden" ref={panelRef} {...autocomplete.getPanelProps()}>
                            {
                                autocompleteState.collections.map((collection, index) => {
                                    const { items } = collection
                                    return (
                                        <section key={`section-${index}`}>
                                            {
                                                items.length > 0 && (
                                                    <ul className="flex flex-col gap-2" {...autocomplete.getListProps()}>
                                                        {
                                                            items.map((item, index) => (
                                                                <AutocompleteItems key={`${item.title}-${index}`} {...item} />
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }
                                        </section>
                                    )
                                })
                            }
                        </div>
                    )

                }
            </div>
        </form>
    )
}