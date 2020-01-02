import { API_KEY, BASE_URL} from './../constants/url';

const getUrlWeatherByCity = city => {
    return  `${BASE_URL}q=${ city }&appid=${API_KEY}`;
};

export default getUrlWeatherByCity;