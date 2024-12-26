
export const HeadingOne = ({ text, children }) => {
    return (
        <div>
            <h1>{text}</h1>
            <h1>{children}</h1>
        </div>
    )
}

export const HeadingTwo = ({ text }) => <h2>{text}</h2>

export const HeadingThree = () => <h3>Hello World</h3>

export const HeadingFour = () => <h4>Hello World</h4>

export const HeadingFive = ({ text }) => <h5>{text}</h5>

export const HeadingSix = () => <h6>Hello World</h6>