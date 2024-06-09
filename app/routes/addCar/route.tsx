import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';

export type FieldValues = {
  brand: string;
  carName: string;
  carState: string;
  imageUrl: string;
  model: string;
  price: number;
};

export function Component() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>();
  const toast = useRef<Toast>(null);
  const onSubmit = async (payLoad: FieldValues) => {
    const { response } = await client.POST('/cars', {
      body: { id: Math.random(), ...payLoad },
    });
    if (response.status === 201) {
      toast.current?.show({
        detail: 'تم الاضافة بنجاح',
        life: 3_000,
        severity: 'success',
      });
    }
  };

  const navigate = useNavigate();
  return (
    <div>
      <Header showNav />

      <div className="card flex justify-content-center ">
        <Dialog
          breakpoints={{ '641px': '97vw', '960px': '75vw' }}
          draggable={false}
          footer={
            <div className="flex items-center  gap-5 border border-solid  justify-center px-4 w-[100%]   h-[70px] ">
              <button
                className={` lg:px-10  px-6  h-10 lg:h-[40px]    rounded-md cursor-pointer text-sm lg:text-base  text-white bg-blue-800 hover:bg-blue-600 transition-all`}
                onClick={handleSubmit(onSubmit)}
                type="submit"
              >
                إضافة
              </button>
              <button
                className="bg-transparent transition-all border border-solid border-gray text-black from-zinc-600 to-zinc-800 hover:text-white font-bold py-2 px-4 rounded-md  hover:bg-zinc-700 hover:to-zinc-600 transition ease-in-out duration-150"
                onClick={(event) => {
                  event.preventDefault();
                  navigate('/');
                }}
                type="button"
              >
                اغلاق
              </button>
            </div>
          }
          onHide={() => navigate('/')}
          style={{ width: '50vw' }}
          visible
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5">
              <div className="flex gap-5 p-2">
                <Controller
                  control={control}
                  defaultValue=""
                  name="carName"
                  render={({ field, fieldState: { error } }) => (
                    <div className=" relative   w-full  ">
                      <FloatinInputLabel
                        errors={error}
                        field={field}
                        labelName="اسم السيارة"
                        type="text"
                      />
                      {error && (
                        <p
                          className={`${errors.carName ? 'text-red-700' : ''}`}
                        >
                          اسم السيارة مطلوب
                        </p>
                      )}
                    </div>
                  )}
                  rules={{ required: true }}
                />
                <Controller
                  control={control}
                  name="price"
                  render={({ field, fieldState: { error } }) => (
                    <div className=" relative group  w-full   ">
                      <FloatinInputLabel
                        errors={error}
                        field={field}
                        labelName="السعر"
                        type="number"
                      />
                      {error && (
                        <p className={`${errors.price ? 'text-red-700' : ''}`}>
                          سعر السيارة مطلوب
                        </p>
                      )}
                    </div>
                  )}
                  rules={{ required: true }}
                />
              </div>
              <div className="flex gap-5 p-2">
                <Controller
                  control={control}
                  defaultValue=""
                  name="brand"
                  render={({ field, fieldState: { error } }) => (
                    <div className=" relative  w-full">
                      <FloatinInputLabel
                        errors={error}
                        field={field}
                        labelName="الشركة"
                        type="text"
                      />
                      {error && (
                        <p className={`${errors.brand ? 'text-red-700' : ''}`}>
                          ادخل اسم الشركة مثل مرسيدس تويوتا...
                        </p>
                      )}
                    </div>
                  )}
                  rules={{ required: true }}
                />
                <Controller
                  control={control}
                  defaultValue=""
                  name="model"
                  render={({ field, fieldState: { error } }) => (
                    <div className=" relative group  w-full   ">
                      <FloatinInputLabel
                        errors={error}
                        field={field}
                        labelName="الموديل"
                        type="text"
                      />
                      {error && (
                        <p className={`${errors.model ? 'text-red-700' : ''}`}>
                          مودل السيارة مطلوب
                        </p>
                      )}
                    </div>
                  )}
                  rules={{ required: true }}
                />
              </div>
              <div className="flex gap-5 p-2">
                <Controller
                  control={control}
                  defaultValue=""
                  name="imageUrl"
                  render={({ field, fieldState: { error } }) => (
                    <div className=" relative group  w-full   ">
                      <FloatinInputLabel
                        errors={error}
                        field={field}
                        labelName="صورة السيارة"
                        type="text"
                      />
                      {error && (
                        <p
                          className={`${errors.imageUrl ? 'text-red-700' : ''}`}
                        >
                          ادخل رابط للصوره
                        </p>
                      )}
                    </div>
                  )}
                  rules={{ required: true }}
                />
                <Controller
                  control={control}
                  defaultValue=""
                  name="carState"
                  render={({ field, fieldState: { error } }) => (
                    <div className=" relative group  w-full   ">
                      <FloatinInputLabel
                        errors={error}
                        field={field}
                        labelName="حالة السيارة"
                        type="text"
                      />
                      {error && (
                        <p
                          className={`${errors.carState ? 'text-red-700' : ''}`}
                        >
                          ادخل سليم او مصدوم
                        </p>
                      )}
                    </div>
                  )}
                  rules={{ required: true }}
                />
              </div>
            </div>
          </form>
        </Dialog>
        <Toast
          pt={{ root: { className: 'w-auto mx-auto' } }}
          ref={toast}
        />
      </div>
    </div>
  );
}
