import * as requester from './requester'

const BaseUrl = 'https://dschinni.pythonanywhere.com/rest'


export const register = async (data) => requester.post(`${BaseUrl}/register/`, data);


export const login = async (data) => requester.post(`${BaseUrl}/login/`, data);


export const GetProfileInfo = async (id) => requester.get(`${BaseUrl}/profile/${id}`);


export const UpdateProfileInfo = async (id, data) => requester.put(`${BaseUrl}/profile/${id}`, data);

export const Logout = async () => requester.get(`${BaseUrl}/logout/`)