import css from './SearchBox.module.css'

interface SearchBoxProps {
    value: string;
    handelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBox({ value, handelChange }: SearchBoxProps) {
    return (
        <input
        className={css.input}
        defaultValue={value}
        type='text'
        onChange={handelChange}
        placeholder='Search notes'
        />
    )
}