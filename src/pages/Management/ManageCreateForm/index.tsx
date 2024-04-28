import { useForm } from 'react-hook-form';

import { Group, InputText, InputTextArea, Select, Title } from '@/components/form/Input';
import { useAddProduct } from '@/hooks/product/useAddProduct';
import { CategoryKey } from '@/interface/products';
import { IProductForm } from '@/interface/form';
import { BOOK_CATEGORY_1, BOOK_CATEGORY_2 } from '@/constants/product';
import { Files } from '@/components/form/files';
import * as S from './style';

const ManageForm = Object.assign(Group, {
  Title,
  InputText,
  InputTextArea,
  Select,
})

export const ManageCreateForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<IProductForm>();
  const { isLoading, onSubmit } = useAddProduct();
  const selectData1 = Object.entries(BOOK_CATEGORY_1);
  const selectData2 = Object.entries(BOOK_CATEGORY_2[watch('category1') as CategoryKey ?? '010']);
  
  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Row>
        <Files register={register("productImg_url")} />
      </S.Row>
      <S.Row>
        <ManageForm>
          <ManageForm.Title title="카테고리(대분류)*" id='category1'/>
          <ManageForm.Select
            options={selectData1}
            resister={register("category1", {
              required: "필수입력란 입니다.",
              onChange(e) {
                setValue('category1', e.target.value)
              },
          })} />
        </ManageForm>
        <ManageForm>
          <ManageForm.Title title="카테고리(중분류)*" id="category2"/>
          <ManageForm.Select
            options={selectData2}
            resister={register("category2", {
              required: "필수입력란 입니다.",
              onChange(e) {
                setValue('category2', e.target.value)
              },
          })} />
        </ManageForm>
      </S.Row>
      <S.Row>
        <ManageForm>
          <ManageForm.Title title="책 제목을 입력해주세요*" id="name"/>
          <ManageForm.InputText
            type="text"
            id='name'
            helperText={errors.name?.message}
            resister={register("name", {
              required: "필수입력란 입니다.",
              maxLength: {
                value: 100,
                message: "제목이 너무 깁니다.(최대 100자)"
              }
          })}/>
        </ManageForm>
      </S.Row>
      <S.Row>
        <ManageForm>
          <ManageForm.Title title="판매가*" id='price'/>
          <ManageForm.InputText
            type="number"
            id='price'
            helperText={errors.price?.message}
            resister={register("price", {
              required: "필수입력란 입니다.",
              min: 0,
              max: 1000000
          })}/>
        </ManageForm>
        <ManageForm>
          <ManageForm.Title title="정상가*" id="regularPrice"/>
          <ManageForm.InputText
            type="number"
            id="regularPrice"
            helperText={errors.regularPrice?.message}
            resister={register("regularPrice", {
              required: "필수입력란 입니다.",
              min: 0,
              max: 1000000
          })}/>
        </ManageForm>
        <ManageForm>
          <ManageForm.Title title="할인율*" id="discountRate"/>
          <ManageForm.InputText
            type="number"
            id="discountRate"
            helperText={errors.discountRate?.message}
            resister={register("discountRate", {
              required: "필수입력란 입니다.",
              min: 0,
              max: 100
          })}/>
        </ManageForm>
      </S.Row>
      <S.Row>
        <ManageForm>
          <ManageForm.Title title="출판사" id="publisher"/>
          <ManageForm.InputText
            type="text"
            id="publisher"
            helperText={errors.publisher?.message}
            resister={register("publisher", {
              maxLength: 20
          })}/>
        </ManageForm>
        <ManageForm>
          <ManageForm.Title title="저자*" id="writer"/>
          <ManageForm.InputText
            type="text"
            id="writer"
            helperText={errors.writer?.message}
            resister={register("writer", {
              required: "필수입력란 입니다.",
              maxLength: 20
          })}/>
        </ManageForm>
      </S.Row>
      <S.Row>
        <ManageForm>
          <ManageForm.Title title="발행일" id="publishDate"/>
          <ManageForm.InputText
            type="text"
            id="publishDate"
            helperText={errors.publisher?.message}
            resister={register("publishDate", {
              maxLength: 10
          })}/>
        </ManageForm>
        <ManageForm>
          <ManageForm.Title title="재고량*" id="quantity"/>
          <ManageForm.InputText
            type="number"
            id="quantity"
            helperText={errors.quantity?.message}
            resister={register("quantity", {
              required: "필수입력란 입니다.",
              min: {
                value: 0,
                message: "0 이상 입력"
              },
          })}/>
        </ManageForm>
        <ManageForm>
          <ManageForm.Title title="쪽수" id="pageNumber"/>
          <ManageForm.InputText
            type="number"
            id="pageNumber"
            helperText={errors.pageNumber?.message}
            resister={register("pageNumber", {
              min: {
                value: 0,
                message: "0 이상 입력"
              },
          })}/>
        </ManageForm>
        <ManageForm>
          <ManageForm.Title title="크기" id="bookSize"/>
          <ManageForm.InputText
            type="text"
            id="bookSize"
            helperText={errors.bookSize?.message}
            resister={register("bookSize", {
              maxLength: 10
          })}/>
        </ManageForm>
        <ManageForm>
          <ManageForm.Title title="무게" id="weight"/>
          <ManageForm.InputText
            type="text"
            id="weight"
            helperText={errors.weight?.message}
            resister={register("weight", {
              maxLength: 10
          })}/>
        </ManageForm>
      </S.Row>
      <S.Row>
        <ManageForm>
          <ManageForm.Title title="설명*" id="desc"/>
          <ManageForm.InputTextArea
            type="textarea"
            id="desc"
            helperText={errors.desc?.message}
            resister={register("desc", {
              required: "필수입력란 입니다.",
              maxLength: 1000
          })}/>
        </ManageForm>
      </S.Row>
      <S.Submit variant="contained" type="submit" disabled={isLoading}>등록</S.Submit>
    </S.Form>
    
    
  )
}