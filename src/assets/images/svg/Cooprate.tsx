import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17 19V3a2 2 0 00-2-2H5a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H1m2 0h5M7 5h1M7 9h1m4-4h1m-1 4h1M8 19v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                stroke="#F9A130"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgComponent
