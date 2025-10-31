import {type FC} from 'react';
import classNames from 'classnames/bind';
import styles from './page.module.css';
import { Search } from 'lucide-react';

const cx = classNames.bind(styles)

export default function Home() {
  return (
   <div className={cx('main')}>
    <div className={cx('header')}>
      <h1 className={cx('title')}>날씨 앱</h1>
      <p className={cx('description')}>어떤 도시든 현재 날씨 정보를 확인하세요.</p>
    </div>
    <form className={cx('search-form')}>
      <input type='text' 
      placeholder='도시 이름을 입력하세요.'
      className={cx('search-input')} />
      <button type='button' className={cx('search-button')}>
        <Search size={16} />
      </button>
    </form>
    <div className={cx('home-main')}>
      <div className={cx('home-init')}>
        <h2 className={cx('home-title')}>
          도시를 검색해서 날씨를 확인하세요.
        </h2>
        <p className={cx('home-description')}>
          예시: 런던, 파리, 도쿄, 뉴욕, 모스크바, 서울, 부산
        </p>
      </div>
      <div className={cx('home-error')}>
        <h2 className={cx('error-title')}>
          앗! 문제가 발생했습니다.
        </h2>
        <p className={cx('error-description')}>"tt" 도시를 찾을 수 없습니다. 런던, 파리, 도
        쿄, 뉴욕, 모스크바, 서울, 부산을 검색해보세
        요!</p>
      </div>
      <div className={cx('home-result')}>
        <div className={cx('location')}>
        <h2 className={cx('city')}>파리</h2>
        <h2 className={cx('temperature')}>22&deg;C</h2>
        <p className={cx('weather')}>맑음</p>
        </div>
        <div className={cx('weather-information')}>
          <div className={cx('hummidity')}>
          <h2 className={cx('weather-title')}>습도</h2>
          <p className={cx('weather-description')}>45%</p>
          </div>
          <div className={cx('wind')}>
            <h2 className={cx('weather-title')}>풍속</h2>
            <p className={cx('weather-description')}>8Km/h</p>
          </div>
          <div className={cx('wind-chill')}>
            <h2 className={cx('weather-title')}>체감온도</h2>
            <p className={cx('weather-description')}>24&deg;C</p>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}
