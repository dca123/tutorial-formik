import { Form } from "./Form";

export const CheckoutCard = () => {
  return (
    <div className=" w-6/12  rounded-sm bg-slate-50 shadow-md">
      <div className="px-10 py-16">
        <h1 className="text-3xl font-normal text-slate-600">Checkout</h1>
        <div className="pt-6">
          <Form />
        </div>
      </div>
    </div>
  );
};
