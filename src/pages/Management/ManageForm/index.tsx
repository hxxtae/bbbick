import { useForm } from 'react-hook-form';

import { Group, InputText, InputTextArea, Select, Title } from '@/components/form/Input';
import { useSetProduct } from '@/hooks/product/useSetProduct';
import { CategoryKey, ProductType } from '@/interface/products';
import { IProductForm } from '@/interface/form';
import { BOOK_CATEGORY_1, BOOK_CATEGORY_2 } from '@/constants/product';
import { Files } from '@/components/form/files';
import * as S from './style';

const ManageInput = Object.assign(Group, {
  Title,
  InputText,
  InputTextArea,
  Select,
})

interface ManageFormProps {
  productData?: ProductType;
}

export const ManageForm = ({ productData }: ManageFormProps) => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<IProductForm>();
  const { isLoading, onSubmit } = useSetProduct();
  const selectData1 = Object.entries(BOOK_CATEGORY_1);
  const selectData2 = Object.entries(BOOK_CATEGORY_2[watch('category1') as CategoryKey ?? productData?.category1 ?? '010']);
  
  return (
    <S.Form onSubmit={handleSubmit((e) => onSubmit(e, productData?.id))}>
      <S.Row>
        <Files register={register("productImg_url")} initFiles={productData?.productImg_url} />
      </S.Row>
      <S.Row>
        <ManageInput>
          <ManageInput.Title title="카테고리(대분류)*" id='category1'/>
          <ManageInput.Select
            options={selectData1}
            defaultValue={productData?.category1}
            resister={register("category1", {
              required: "필수입력란 입니다.",
              onChange(e) {
                setValue('category1', e.target.value)
              },
          })} />
        </ManageInput>
        <ManageInput>
          <ManageInput.Title title="카테고리(중분류)*" id="category2"/>
          <ManageInput.Select
            options={selectData2}
            defaultValue={productData?.category2}
            resister={register("category2", {
              required: "필수입력란 입니다.",
              onChange(e) {
                setValue('category2', e.target.value)
              },
          })} />
        </ManageInput>
      </S.Row>
      <S.Row>
        <ManageInput>
          <ManageInput.Title title="책 제목을 입력해주세요*" id="name"/>
          <ManageInput.InputText
            type="text"
            id='name'
            helperText={errors.name?.message}
            resister={register("name", {
              required: "필수입력란 입니다.",
              maxLength: {
                value: 100,
                message: "제목이 너무 깁니다.(최대 100자)"
              },
              value: productData?.name
          })}/>
        </ManageInput>
      </S.Row>
      <S.Row>
        <ManageInput>
          <ManageInput.Title title="판매가*" id='price'/>
          <ManageInput.InputText
            type="number"
            id='price'
            helperText={errors.price?.message}
            resister={register("price", {
              required: "필수입력란 입니다.",
              min: 0,
              max: 1000000,
              value: productData?.price
          })}/>
        </ManageInput>
        <ManageInput>
          <ManageInput.Title title="정상가*" id="regularPrice"/>
          <ManageInput.InputText
            type="number"
            id="regularPrice"
            helperText={errors.regularPrice?.message}
            resister={register("regularPrice", {
              required: "필수입력란 입니다.",
              min: 0,
              max: 1000000,
              value: productData?.regularPrice
          })}/>
        </ManageInput>
        <ManageInput>
          <ManageInput.Title title="할인율*" id="discountRate"/>
          <ManageInput.InputText
            type="number"
            id="discountRate"
            helperText={errors.discountRate?.message}
            resister={register("discountRate", {
              required: "필수입력란 입니다.",
              min: 0,
              max: 100,
              value: productData?.discountRate
          })}/>
        </ManageInput>
      </S.Row>
      <S.Row>
        <ManageInput>
          <ManageInput.Title title="출판사" id="publisher"/>
          <ManageInput.InputText
            type="text"
            id="publisher"
            helperText={errors.publisher?.message}
            resister={register("publisher", {
              maxLength: 20,
              value: productData?.publisher
          })}/>
        </ManageInput>
        <ManageInput>
          <ManageInput.Title title="저자*" id="writer"/>
          <ManageInput.InputText
            type="text"
            id="writer"
            helperText={errors.writer?.message}
            resister={register("writer", {
              required: "필수입력란 입니다.",
              maxLength: 20,
              value: productData?.writer
          })}/>
        </ManageInput>
      </S.Row>
      <S.Row>
        <ManageInput>
          <ManageInput.Title title="발행일*" id="publishDate"/>
          <ManageInput.InputText
            type="date"
            id="publishDate"
            helperText={errors.publisher?.message}
            resister={register("publishDate", {
              required: "필수입력란 입니다.",
              maxLength: 10,
              value: productData?.publishDate
          })}/>
        </ManageInput>
        <ManageInput>
          <ManageInput.Title title="재고량*" id="quantity"/>
          <ManageInput.InputText
            type="number"
            id="quantity"
            helperText={errors.quantity?.message}
            resister={register("quantity", {
              required: "필수입력란 입니다.",
              min: {
                value: 0,
                message: "0 이상 입력"
              },
              value: productData?.quantity
          })}/>
        </ManageInput>
        <ManageInput>
          <ManageInput.Title title="쪽수" id="pageNumber"/>
          <ManageInput.InputText
            type="number"
            id="pageNumber"
            helperText={errors.pageNumber?.message}
            resister={register("pageNumber", {
              min: {
                value: 0,
                message: "0 이상 입력"
              },
              value: productData?.pageNumber
          })}/>
        </ManageInput>
        <ManageInput>
          <ManageInput.Title title="크기" id="bookSize"/>
          <ManageInput.InputText
            type="text"
            id="bookSize"
            helperText={errors.bookSize?.message}
            resister={register("bookSize", {
              maxLength: 10,
              value: productData?.bookSize
          })}/>
        </ManageInput>
        <ManageInput>
          <ManageInput.Title title="무게" id="weight"/>
          <ManageInput.InputText
            type="text"
            id="weight"
            helperText={errors.weight?.message}
            resister={register("weight", {
              maxLength: 10,
              value: productData?.weight
          })}/>
        </ManageInput>
      </S.Row>
      <S.Row>
        <ManageInput>
          <ManageInput.Title title="설명*" id="desc"/>
          <ManageInput.InputTextArea
            type="textarea"
            id="desc"
            helperText={errors.desc?.message}
            resister={register("desc", {
              required: "필수입력란 입니다.",
              maxLength: 1000,
              value: productData?.desc
          })}/>
        </ManageInput>
      </S.Row>
      <S.Submit variant="contained" type="submit" disabled={isLoading}>등록</S.Submit>
    </S.Form>
    
    
  )
}