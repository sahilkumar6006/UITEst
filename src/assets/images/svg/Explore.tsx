import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M14 11v6m-3-3h6M3 7h2a2 2 0 002-2V3a2 2 0 00-2-2H3a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V3a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM3 17h2a2 2 0 002-2v-2a2 2 0 00-2-2H3a2 2 0 00-2 2v2a2 2 0 002 2z"
                stroke="#C2C2C2"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgComponent
