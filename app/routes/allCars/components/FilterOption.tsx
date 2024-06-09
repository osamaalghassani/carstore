import {
  filterCarState,
  filterModel,
  searchInTable,
  useGetAllModel,
} from '../store';

export const FilterOption = () => {
  const { control } = useForm();

  const { data: model } = useGetAllModel();
  return (
    <div className="mx-auto w-fit">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
        <Controller
          control={control}
          defaultValue=""
          name="search"
          render={({ field }) => (
            <div className=" relative group flex  md:col-span-2  ">
              <input
                className=" bg-slate-200   peer rounded-s-xl  border-transparent w-full h-12 lg:h-[60px]  appearance-none border border-gray-300   px-10  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:bg-white focus:ring-blue-500 focus:border-transparent"
                {...field}
                onChange={(event) => {
                  field.onChange(event.target.value);
                  if (event.target.value.length === 0) searchInTable('');
                }}
                placeholder="اسم السيارة"
                type="text"
                value={field.value}
              />
              <svg
                className="absolute start-2  top-1/2 -translate-y-1/2  "
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={` ${
                    field.value ? 'fill-blue-500' : 'fill-slate-400'
                  }`}
                  d="M10.2932 0C4.60841 0 0 4.65799 0 10.4039C0 16.1498 4.60841 20.8078 10.2932 20.8078C15.9779 20.8078 20.5863 16.1498 20.5863 10.4039C20.5863 7.64463 19.5019 4.99835 17.5716 3.04724C15.6412 1.09612 13.0231 0 10.2932 0Z"
                  fill="#94A3B8"
                />
                <path
                  className={` ${
                    field.value ? 'fill-blue-500' : 'fill-slate-400'
                  }`}
                  d="M23.4816 21.2597L20.416 18.7851C19.9522 18.3244 19.2087 18.3244 18.7448 18.7851C18.5043 19.0274 18.3691 19.3564 18.3691 19.6996C18.3691 20.0428 18.5043 20.3719 18.7448 20.6141L21.2889 23.5298C21.9091 24.1567 22.9146 24.1567 23.5348 23.5298C24.155 22.9029 24.155 21.8866 23.5348 21.2597H23.4816Z"
                  fill="#94A3B8"
                />
              </svg>
              <button
                className="peer-focus:ring-2 ring-blue-500  py-2 px-4 bg-slate-400   transition-colors rounded-e-lg  text-white font-semibold hover:bg-blue-500"
                onClick={() => searchInTable(field.value)}
                type="button"
              >
                بحث
              </button>
            </div>
          )}
          rules={{ required: true }}
        />
        <Controller
          control={control}
          defaultValue=""
          name="carState"
          render={({ field }) => (
            <div className=" relative group   md:col-span-2">
              <select
                {...field}
                className=" bg-slate-200     rounded-3xl border-transparent  w-full h-12   lg:h-[60px]  appearance-none border border-gray-300   px-10  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:bg-white focus:ring-blue-500 focus:border-transparent"
                onChange={(event_) => field.onChange(event_.target.value)}
              >
                <option
                  className={field.value ? 'hidden' : ''}
                  value=""
                >
                  حالة السيارة
                </option>

                <option value="سليم">سليم</option>
                <option value="مصدوم">مصدوم</option>
              </select>
              <svg
                className="absolute start-2  top-1/2 -translate-y-1/2  "
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={` ${
                    field.value ? 'fill-blue-500' : 'fill-slate-400'
                  }`}
                  d="M5.64292 11.3363C2.53242 11.3363 0.00195312 8.80587 0.00195312 5.69538C0.00195312 2.58488 2.53242 0.0544128 5.64292 0.0544128C8.75341 0.0544128 11.2839 2.58488 11.2839 5.69538C11.2839 8.80587 8.75341 11.3363 5.64292 11.3363Z"
                  fill="#94A3B8"
                />
                <path
                  className={` ${
                    field.value ? 'fill-blue-500' : 'fill-slate-400'
                  }`}
                  d="M8.60282 23.9456H2.68313C1.72483 23.9456 0.862093 23.4459 0.375642 22.6083C-0.121426 21.7529 -0.125408 20.7289 0.365024 19.8695L3.32487 14.6831C3.80933 13.8343 4.67539 13.3273 5.64298 13.3273C6.61057 13.3273 7.47662 13.8343 7.96108 14.6831L10.9209 19.8695C11.4114 20.7289 11.4074 21.7529 10.9103 22.6083C10.4245 23.4459 9.56179 23.9456 8.60282 23.9456Z"
                  fill="#94A3B8"
                />
                <path
                  className={` ${
                    field.value ? 'fill-blue-500' : 'fill-slate-400'
                  }`}
                  d="M20.2432 10.6727H16.2613C14.6148 10.6727 13.2749 9.3328 13.2749 7.6863V3.70444C13.2749 2.05794 14.6148 0.718048 16.2613 0.718048H20.2432C21.8897 0.718048 23.2295 2.05794 23.2295 3.70444V7.6863C23.2295 9.3328 21.8897 10.6727 20.2432 10.6727Z"
                  fill="#94A3B8"
                />
                <path
                  className={` ${
                    field.value ? 'fill-blue-500' : 'fill-slate-400'
                  }`}
                  d="M19.8726 23.9409C19.8699 23.9409 19.8666 23.9409 19.8633 23.9409L16.5557 23.9296C15.2112 23.925 14.0319 23.0616 13.6204 21.7828L12.609 18.6338C12.1976 17.3529 12.6542 15.9653 13.7445 15.1789L16.4256 13.2437C17.516 12.4573 18.9773 12.4619 20.0624 13.2556L22.7316 15.2081C23.8166 16.0018 24.2639 17.3934 23.8438 18.6709L22.8112 21.8126C22.3944 23.0868 21.2138 23.9409 19.8726 23.9409Z"
                  fill="#94A3B8"
                />
              </svg>
            </div>
          )}
          rules={{ required: true }}
        />
        <Controller
          control={control}
          defaultValue=""
          name="model"
          render={({ field }) => (
            <div className=" relative group   md:col-span-2">
              <select
                {...field}
                className=" bg-slate-200     rounded-3xl border-transparent  w-full h-12   lg:h-[60px]  appearance-none border border-gray-300   px-10  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:bg-white focus:ring-blue-500 focus:border-transparent"
                onChange={(event_) => {
                  field.onChange(event_.target.value);
                  filterModel(event_.target.value);
                }}
              >
                <option
                  className={field.value ? 'hidden' : ''}
                  value=""
                >
                  الموديل
                </option>
                {model?.data?.map(
                  ({
                    id,
                    model,
                  }: {
                    readonly id: number;
                    readonly model: string;
                  }) => (
                    <option
                      key={id}
                      value={model}
                    >
                      {model}
                    </option>
                  ),
                )}
              </select>
              <svg
                className="absolute start-2  top-1/2 -translate-y-1/2  "
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={` ${
                    field.value ? 'fill-blue-500' : 'fill-slate-400'
                  }`}
                  d="M5.64292 11.3363C2.53242 11.3363 0.00195312 8.80587 0.00195312 5.69538C0.00195312 2.58488 2.53242 0.0544128 5.64292 0.0544128C8.75341 0.0544128 11.2839 2.58488 11.2839 5.69538C11.2839 8.80587 8.75341 11.3363 5.64292 11.3363Z"
                  fill="#94A3B8"
                />
                <path
                  className={` ${
                    field.value ? 'fill-blue-500' : 'fill-slate-400'
                  }`}
                  d="M8.60282 23.9456H2.68313C1.72483 23.9456 0.862093 23.4459 0.375642 22.6083C-0.121426 21.7529 -0.125408 20.7289 0.365024 19.8695L3.32487 14.6831C3.80933 13.8343 4.67539 13.3273 5.64298 13.3273C6.61057 13.3273 7.47662 13.8343 7.96108 14.6831L10.9209 19.8695C11.4114 20.7289 11.4074 21.7529 10.9103 22.6083C10.4245 23.4459 9.56179 23.9456 8.60282 23.9456Z"
                  fill="#94A3B8"
                />
                <path
                  className={` ${
                    field.value ? 'fill-blue-500' : 'fill-slate-400'
                  }`}
                  d="M20.2432 10.6727H16.2613C14.6148 10.6727 13.2749 9.3328 13.2749 7.6863V3.70444C13.2749 2.05794 14.6148 0.718048 16.2613 0.718048H20.2432C21.8897 0.718048 23.2295 2.05794 23.2295 3.70444V7.6863C23.2295 9.3328 21.8897 10.6727 20.2432 10.6727Z"
                  fill="#94A3B8"
                />
                <path
                  className={` ${
                    field.value ? 'fill-blue-500' : 'fill-slate-400'
                  }`}
                  d="M19.8726 23.9409C19.8699 23.9409 19.8666 23.9409 19.8633 23.9409L16.5557 23.9296C15.2112 23.925 14.0319 23.0616 13.6204 21.7828L12.609 18.6338C12.1976 17.3529 12.6542 15.9653 13.7445 15.1789L16.4256 13.2437C17.516 12.4573 18.9773 12.4619 20.0624 13.2556L22.7316 15.2081C23.8166 16.0018 24.2639 17.3934 23.8438 18.6709L22.8112 21.8126C22.3944 23.0868 21.2138 23.9409 19.8726 23.9409Z"
                  fill="#94A3B8"
                />
              </svg>
            </div>
          )}
          rules={{ required: true }}
        />
      </div>
    </div>
  );
};
