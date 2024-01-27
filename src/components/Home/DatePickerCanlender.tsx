import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CalendarPicker from 'react-native-calendar-picker';
import { COLORS } from '../../theme/theme';
const DatePickerCanlender: any = () => {
    const minDate = new Date()
    const maxDate = new Date(2026, 6, 6)
    return (
        <View style={styles.boxWrapper} className='px-[16px] mt-[16px]'>
            <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={true}
                minDate={minDate}
                maxDate={maxDate}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    boxWrapper: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 8,
        elevation: 6,
        backgroundColor:COLORS.primaryWhiteHex,
        borderWidth: 1,
        borderRadius:8
    }
})

export default DatePickerCanlender