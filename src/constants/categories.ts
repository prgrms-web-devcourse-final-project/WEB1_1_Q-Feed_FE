export const categories = ['전체', '여행', '스포츠', '패션', '문화', '맛집', '기타'];

export enum Category {
  TRAVEL = '여행',
  SPORTS = '스포츠',
  FASHION = '패션',
  CULTURE = '문화',
  DELICIOUS_RESTAURANT = '맛집',
  ETC = '기타',
}

export const CATEGORIES = {
  여행: 'TRAVEL',
  스포츠: 'SPORTS',
  패션: 'FASHION',
  문화: 'CULTURE',
  맛집: 'DELICIOUS_RESTAURANT',
  기타: 'ETC',
} as const;

export const CATEGORY_QUESTION_MAP = {
  [Category.TRAVEL]: 1,
  [Category.SPORTS]: 2,
  [Category.FASHION]: 3,
  [Category.CULTURE]: 4,
  [Category.DELICIOUS_RESTAURANT]: 5,
  [Category.ETC]: 6,
};
