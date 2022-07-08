import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "f968af23-5c9d-4b46-9533-60557b884aac"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}


export const authAPI = {
    authMe() {
        return instance.get(`auth/me/`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`/profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    },
    changeInfo(profile) {
        return instance.put(`profile`, profile)
    }

}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }

}