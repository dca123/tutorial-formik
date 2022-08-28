import {
  Formik,
  Form as FormikForm,
  Field,
  useField,
  FieldHookConfig,
} from "formik";
import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

const initialValues = {
  name: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
};

const onSubmit = (values: typeof initialValues) => {
  console.log(values);
};

export const Form = ({
  handleSubmit,
}: {
  handleSubmit: (values: typeof initialValues) => void;
}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormikForm>
        <div className="flex-row">
          <div>
            <Label text="Cardholder Name" />
            <Input type="text" name="name" />
          </div>

          <div className="mt-4">
            <Label text="Card Number" />
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <CardIcon />
              </div>
              <Input type="text" name="cardNumber" />
            </div>
          </div>

          <div className="mt-4 flex w-full">
            <div className="w-full">
              <Label text="Expiry Date" />
              <Input type="text" name="expiryDate" />
            </div>
            <div className="ml-4 w-full">
              <Label text="CVV" />
              <Input type="text" name="cvv" />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-green-500 py-4 text-xl font-normal text-green-50 shadow-sm hover:shadow-lg hover:shadow-green-500/30"
          >
            Checkout Now
          </button>
        </div>
      </FormikForm>
    </Formik>
  );
};

const Label = ({ text }: { text: string }) => {
  return (
    <label className="block text-sm font-medium uppercase tracking-wider text-slate-400">
      {text}
    </label>
  );
};

const Input = ({
  type,
  name,
}: {
  type: HTMLInputTypeAttribute;
  name: string;
}) => {
  const [field] = useField(name);
  return (
    <input
      {...field}
      type={type}
      className="mt-1 w-full rounded border border-slate-400 py-2 pl-3 text-slate-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
    />
  );
};

const CardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className=" h-6 w-6 text-slate-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
    />
  </svg>
);
