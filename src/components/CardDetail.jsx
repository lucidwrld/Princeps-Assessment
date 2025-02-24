import { info } from "../assets";

export default function CardDetails({allCustomers, activeCustomers, overDueCustomers, InactiveDormant}){

    return(
        <div className='w-full h-fit lg:h-[125px] flex-shrink-0 grid gap-5 grid-cols-1 lg:grid-cols-4'>
          <div className='col-span-2 relative flex lg:hidden  justify-center '>
                <div className='w-full h-[119px] grid grid-cols-2 divide-x gap-5 p-[20px] z-20 rounded-[6px] bg-white border-[0.8px] border-brandBorder shadow-custom-shadow'>
                  <div className='w-full flex flex-col items-end  '>
                      <img src={info} alt='' className='w-[16px] h-[16px]' />
                      <div className='w-full h-full flex flex-col justify-between'>
                        <h3 className='text-[14px] text-[#5E5F6E] font-normal'>
                        All customers
                        </h3>
                        <p className='text-[32px] text-brandColor5 font-semibold'>
                          {allCustomers}
                        </p>
                      </div>
                  </div>
                  <div className='w-full pl-5 flex flex-col items-end  '>
                      <img src={info} alt='' className='w-[16px] h-[16px]' />
                      <div className='w-full h-full flex flex-col justify-between'>
                        <h3 className='text-[14px] text-[#5E5F6E] font-normal'>
                        Inactive & Dormant
                        </h3>
                        <p className='text-[32px] text-brandColor5 font-semibold'>
                          {InactiveDormant}
                        </p>
                      </div>
                  </div>
                </div>
                <div className='absolute w-[85%] h-full z-10 rounded-[6px] border-[0.8px] border-brandBorder shadow-custom-shadow'>

                </div>
              </div>
              <div className='col-span-1 relative hidden lg:flex  justify-center '>
                <div className='w-full h-[119px] flex flex-col items-end p-[20px] z-20 rounded-[6px] bg-white border-[0.8px] border-brandBorder shadow-custom-shadow'>
                    <img src={info} alt='' className='w-[16px] h-[16px]' />
                    <div className='w-full h-full flex flex-col justify-between'>
                      <h3 className='text-[14px] text-[#5E5F6E] font-normal'>
                        All customers
                      </h3>
                      <p className='text-[32px] text-brandColor5 font-semibold'>
                        {allCustomers}
                      </p>
                    </div>
                </div>
                <div className='absolute w-[85%] h-full z-10 rounded-[6px] border-[0.8px] border-brandBorder shadow-custom-shadow'>

                </div>
              </div>
              <div className='col-span-2 relative flex  justify-center '>
                <div className='w-full h-[119px] grid grid-cols-2 divide-x gap-5 p-[20px] z-20 rounded-[6px] bg-white border-[0.8px] border-brandBorder shadow-custom-shadow'>
                  <div className='w-full flex flex-col items-end  '>
                      <img src={info} alt='' className='w-[16px] h-[16px]' />
                      <div className='w-full h-full flex flex-col justify-between'>
                        <h3 className='text-[14px] text-[#5E5F6E] font-normal'>
                        Active Customers
                        </h3>
                        <p className='text-[32px] text-brandColor5 font-semibold'>
                          {activeCustomers}
                        </p>
                      </div>
                  </div>
                  <div className='w-full pl-5 flex flex-col items-end  '>
                      <img src={info} alt='' className='w-[16px] h-[16px]' />
                      <div className='w-full h-full flex flex-col justify-between'>
                        <h3 className='text-[14px] text-[#5E5F6E] font-normal'>
                        Overdue Customers
                        </h3>
                        <p className='text-[32px] text-brandColor5 font-semibold'>
                          {overDueCustomers}
                        </p>
                      </div>
                  </div>
                </div>
                <div className='absolute w-[85%] h-full z-10 rounded-[6px] border-[0.8px] border-brandBorder shadow-custom-shadow'>

                </div>
              </div>
              <div className='col-span-1 relative hidden lg:flex  justify-center '>
                <div className='w-full h-[119px] flex flex-col items-end p-[20px] z-20 rounded-[6px] bg-white border-[0.8px] border-brandBorder shadow-custom-shadow'>
                    <img src={info} alt='' className='w-[16px] h-[16px]' />
                    <div className='w-full h-full flex flex-col justify-between'>
                      <h3 className='text-[14px] text-[#5E5F6E] font-normal'>
                      Inactive & Dormant
                      </h3>
                      <p className='text-[32px] text-brandColor5 font-semibold'>
                        {InactiveDormant}
                      </p>
                    </div>
                </div>
                <div className='absolute w-[85%] h-full z-10 rounded-[6px] border-[0.8px] border-brandBorder shadow-custom-shadow'>

                </div>
              </div>
          </div>
    )
}