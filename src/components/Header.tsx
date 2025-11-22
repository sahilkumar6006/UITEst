import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Logo from '@/assets/images/svg/Logo'
import Person from '@/assets/images/svg/Person'
import Hamburger from '@/assets/images/svg/Hamburger'

const Header = () => {
    return (
        <View style={styles.container}>
            <Hamburger />
            <Logo />
            <Person />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 17,
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default Header