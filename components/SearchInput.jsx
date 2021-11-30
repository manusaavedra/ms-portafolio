
import { createAutocomplete } from '@algolia/autocomplete-core'
import { cloneElement, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AutocompleteItems = ({ title, description, thumbnail, slug, tag }) => {
    return (
        <li>
            <Link href={`/blog/${slug}`} passHref>
                <a>
                    <div className="thumbnail">
                        <Image src={thumbnail} width={200} height={100} layout="intrinsic" alt={title} />
                    </div>
                    <div className="content">
                        <h4> {title} </h4>
                        <p> {description} </p>
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
        <form ref={formRef} className="search-form" {...formProps} >
            <div className="form-inputs">
                <input ref={inputRef} type="text" {...inputProps} />
            </div>
            <div className="autocomplete">
                {
                    autocompleteState.isOpen && (
                        <div className="autocomplete-panel" ref={panelRef} {...autocomplete.getPanelProps()}>
                            {
                                autocompleteState.collections.map((collection, index) => {
                                    const { items } = collection
                                    console.log(collection)
                                    return (
                                        <section key={`section-${index}`}>
                                            {
                                                items.length > 0 && (
                                                    <ul {...autocomplete.getListProps()}>
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