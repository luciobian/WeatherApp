import moment from 'moment';
import transformWeather from './transformWeather';
import 'moment/locale/es';

// moment.locale('es');

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

const transformForecast = data => (
    data.list.filter( item =>
        moment.unix(item.dt).hour() === 6 ||
        moment.unix(item.dt).hour() === 12 ||
        moment.unix(item.dt).hour() === 18            
    ).map(item => (
        {
            weekDay: capitalize(moment.unix(item.dt).format('ddd')),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item),

        }
    ))
);

export default transformForecast;