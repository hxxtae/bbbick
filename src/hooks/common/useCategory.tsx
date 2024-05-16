import { BOOK_CATEGORY_1, BOOK_CATEGORY_2 } from '@/constants/product';
import { CategoryKey } from '@/interface/products';
import { useForm } from 'react-hook-form';
import { useCallback, useState } from 'react';

import { styled as style } from '@mui/system';
import { Box, Chip } from '@mui/material';
import { Select } from '@/components/form/Input';
import styled from '@emotion/styled';

type Category1Type = CategoryKey | "000";

interface CategoryForm {
  category1: string;
}

export const useCategory = () => {
  const initCategory1 = Object.entries({"000": "전체", ...BOOK_CATEGORY_1});
  const [category1, setCategory1] = useState<Category1Type>("000");
  const [category2, setCategory2] = useState<string>();
  const { register } = useForm<CategoryForm>();

  const onClickCategory = (category2: string) => {
    setCategory2((prev) => prev === category2 ? '' : category2)
  }

  const CategorySelect = useCallback(() => {
    return (
      <Select options={initCategory1} resister={register("category1", {
        value: category1,
        onChange(e) {
          setCategory1(e.target.value)
          setCategory2('')
        },
      })} />
    )
  }, [])

  const CategoryItem = () => {
    if (category1 === "000") return [];

    return (
      Object.entries(BOOK_CATEGORY_2[category1])?.map(([key, val]) =>
        (<ChipItem key={key} label={val} variant="outlined" choose={(category2 === key).toString()} onClick={() => onClickCategory(key)} />))
    )
  }

  const CategoryList = () => {
    return (
      <CategoryBlock>
        <CategoryItem />
      </CategoryBlock>
    )
  }

  return {
    category1,
    category2,
    CategorySelect,
    CategoryList
  }
}

export const CategoryBlock = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ChipItem = style(Chip)<{ choose: string }>(({ theme, choose }) => ({
  marginTop: "20px",
  cursor: "pointer",
  backgroundColor: choose === "true" ? theme.palette.text.main : "transparent",
  color: choose === "true" ? theme.palette.bg.main : theme.palette.text.main,

  ":hover": {
    color: theme.palette.text.main
  }
}));