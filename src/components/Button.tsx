
const Button = (props: any) => {
    return (
        <button className="bg-[#90CAF9] p-2 text-white font-outfitMedium px-4 rounded-full text-base capitalize">
            {props.children}
        </button>
    )
}

export default Button