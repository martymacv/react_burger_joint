import { API_BASE_URL, API_DATA, API_ENDPOINTS } from '../constants';
import { redirect } from "react-router-dom";

export async function subscribeAction({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const bodyData = { email }
    console.log(bodyData)
    const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.TEST('subscribes')}`, 
        API_DATA("POST", bodyData)
    );

    if (response.ok) {
        const user = await response.json()
        return {
            redirect: '/',
            success: true,
            user: user
        }
    }
}