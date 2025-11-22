import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={16}
            height={20}
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M12 5a4 4 0 11-8 0 4 4 0 018 0zM8 12a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                stroke="#F9A130"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgComponent
