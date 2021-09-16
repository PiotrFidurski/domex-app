import { Formik } from "formik";
import * as React from "react";
import { useHistory } from "react-router-dom";
import { useCreateHouseMutation } from "../state/houses/housesApiSlice";
import * as S from "../styles";

interface Values {
  address: string;
  floorsNumber: number;
  description: string;
  label: string;
}

export const CreateHouse: React.FC = () => {
  const { push } = useHistory();

  const [create] = useCreateHouseMutation();

  return (
    <Formik<Values>
      initialValues={{
        address: "",
        floorsNumber: 0,
        description: "",
        label: "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        // toggle submitting state so users cant spam-click the create button
        setSubmitting(true);
        await create({
          ...values,
          // cast input value to Number for extra validation
          floorsNumber: Number(values.floorsNumber),
        });
        setSubmitting(false);
        push("/houses");
      }}
    >
      {({ ...props }) => {
        const { handleSubmit, handleChange, isSubmitting } = props;
        const { description, address, label, floorsNumber } = props.values;
        return (
          <S.PageContainer flexCol>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label htmlFor="address" id="address" />
              <S.Input
                placeholder="address"
                type="text"
                name="address"
                onChange={handleChange}
                value={props.values.address}
              />
              <label htmlFor="description" id="description" />
              <S.Input
                placeholder="description"
                type="text"
                name="description"
                onChange={handleChange}
                value={props.values.description}
              />
              <label htmlFor="label" id="label" />
              <S.Input
                placeholder="label"
                type="text"
                name="label"
                onChange={handleChange}
                value={props.values.label}
              />
              <label htmlFor="floorsNumber" id="floorsNumber" />
              <S.Input
                type="number"
                name="floorsNumber"
                value={props.values.floorsNumber}
                placeholder="floorsNumber"
                onChange={handleChange}
              />
              <S.Button
                disabled={
                  !!isSubmitting ||
                  !description ||
                  !address ||
                  !label ||
                  !floorsNumber
                }
                type="submit"
                style={{ marginTop: "20px" }}
              >
                Create
              </S.Button>
            </form>
          </S.PageContainer>
        );
      }}
    </Formik>
  );
};
