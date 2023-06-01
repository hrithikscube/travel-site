
const Button = (props: any) => {
    return (
        <button className="bg-themeBlue p-2 text-white font-medium px-4 rounded-full text-base">
            {props.children}
        </button>
    )
}

export default Button