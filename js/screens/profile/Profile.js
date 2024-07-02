import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoggedIn } from '../../redux/authReducer/isLogin'
import { setUserInfo } from '../../redux/authReducer/userInfoRedux'

export const Profile = () => {
  const dispatch = useDispatch()
  // const DATA = useSelector((state)=>state.auth.isLoggedIn)
  // console.log(DATA)
  // console.log(DATA.isLoggedIn)
  const handleLogout =async () => {
   await dispatch(setIsLoggedIn(false))
    console.log("clicked")

   
  }
  return (
    <View>
      <TouchableOpacity onPress={handleLogout}>
      <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
