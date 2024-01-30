'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import classNames from 'classnames/bind';

import { SEARCH_FILTER_MAP, SearchFilterType } from '@constants/searchByMap';
import Drawer from '@shared/drawer/Drawer';
import Dropdown from '@shared/dropdown/Dropdown';
import Header from '@shared/header/Header';
import ProductArticle from '@shared/product-article/ProductArticle';
import SearchBar from '@shared/search-bar/SearchBar';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import styles from './page.module.scss';

const cx = classNames.bind(styles);
const productArticleData = [
  {
    brand: '카믹스',
    category: '코팅제',
    id: 1,
    img: '/assets/profile.JPG',
    name: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    warningLevel: 'warning',
  },
  {
    brand: '카믹스',
    category: '코팅제',
    id: 2,
    img: '/assets/profile.JPG',
    name: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    warningLevel: 'warning',
  },
  {
    brand: '카믹스',
    category: '코팅제',
    id: 3,
    img: '/assets/profile.JPG',
    name: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    warningLevel: 'warning',
  },
  {
    brand: '카믹스',
    category: '코팅제',
    id: 4,
    img: '/assets/profile.JPG',
    name: '아머올 세차용품 스피드 왁스 스프레이 500ml스피드 왁스 스프레이 500ml',
    warningLevel: 'warning',
  },
];

const options = [
  { label: '조회순', value: 'view' },
  { label: '위반제품순', value: 'violations' },
  { label: '최신순', value: 'latest' },
  { label: '추천순', value: 'recommended' },
];

function SearchPage() {
  // TODO: 쿼리스트링을 필터 값 받아와서 default value 설정하기 ex. view, violations, latest, recommended
  const { register, watch } = useForm({
    defaultValues: {
      filter: 'view',
    },
  });

  const [isOpenFilterDrawer, setIsOpenFilterDrawer] = useState(false);

  const handleFilterClick = () => {
    setIsOpenFilterDrawer((prev) => { return !prev; });
  };

  return (
    <>
      <Header isDisplayLogo={false} displayRightIconType="filter" onFilterClick={handleFilterClick} />
      <Spacing size={8} />
      <main className={cx('mainContainer')}>
        <SearchBar />
        <div className={cx('filterWrapper')}>
          <Text typography="t6" color="gray400">{`총 ${productArticleData.length}개`}</Text>
          <Dropdown
            options={options}
            selectedLabel={(SEARCH_FILTER_MAP[watch('filter') as SearchFilterType])}
            type="favorite"
            {...register('filter')}
          />
        </div>
        <div className={cx('productArticleContainer')}>
          {productArticleData.map((item) => {
            return <ProductArticle key={item.id} itemData={item} />;
          })}
        </div>
      </main>
      <Drawer isOpen={isOpenFilterDrawer} onClose={() => { setIsOpenFilterDrawer(false); }}>
        {/* 필터 내용 아코디언 */}
        <p>Filter Content</p>
      </Drawer>
    </>
  );
}
export default SearchPage;
