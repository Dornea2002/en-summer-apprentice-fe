const bookOfStyles = {

    purchase: [
  
      'bg-white',
  
      'px-4',
  
      'sm:border-b',
  
      'flex',
  
    ],
  
    purchaseTitle: [
  
      'text-lg',
  
      'font-semibold',
  
      'text-gray-900',
  
      'flex-1',
  
    ],
  
    purchaseQantity: [
  
      'mt-1',
  
      'text-sm',
  
      'text-gray-500',
  
      'sm:mt-0',
  
      'sm:col-span-2',
  
    ],
  
    eventWrapper: [
  
      'event',
  
      'height-300',
  
      'bg-zinc-500',
  
      'rounded',
  
      'shadow-md',
  
      'p-4',
  
      'flex',
  
      'flex-col',
  
      'm-6',
  
      'mt-8',
  
      'overflow-hidden',
  
      'display-flex',
  
      'justify-content-space-between',
  
      'align-items-center',
  
      'white-space-nowrap',
  
      'width-300px',
  
    ],
  
    actionsWrapper: [
  
      'actions',
  
      'flex',
  
      'items-center',
  
      'mt-4',
  
    ],
  
    quantity: [
  
      'actions',
  
      'flex',
  
      'items-center',
  
      'mt-4',
  
    ],
  
    input: [
  
      'input',
  
      'w-16',
  
      'text-center',
  
      'border',
  
      'border-gray-300',
  
      'rounded',
  
      'py-2',
  
      'px-4',
  
      'text-gray-700',
  
      'focus:outline-none',
  
      'focus:shadow-outline',
  
    ],
  
    quantityAction: [
  
      'quantity-actions',
  
      'flex',
  
      'space-x-2',
  
      'ml-6'
  
    ],
  
    increaseBtn: [
  
      'increase',
  
      'px-3',
  
      'py-1',
  
      'rounded',
  
      'bg-black',
  
      'font-bold',
  
      'text-white',
  
      'hover:bg-black-900',
  
      'disabled:cursor-not-allowed',
  
      'focus:outline-none',
  
      'focus:shadow-outline',
  
    ],
  
    decreaseBtn: [
  
      'decrease',
  
      'px-3',
  
      'py-1',
  
      'rounded',
  
      'bg-white',
  
      'font-bold',
  
      'text-black',
  
      'hover:bg-black-900',
  
      'disabled:cursor-not-allowed',
  
      'focus:outline-none',
  
      'focus:shadow-outline',
  
    ],
  
    addToCartBtn: [
  
      'add-to-cart-btn',
  
      'px-4',
  
      'py-2',
  
      'rounded',
  
      'text-black',
  
      'font-bold',
  
      'disabled:opacity-50',
  
      'disabled:cursor-not-allowed',
  
      'focus:outline-none',
  
      'focus:shadow-outline',
  
    ],
  
    imgicon:[
  
      'imgicon',
  
      'w-5',
  
      'mr-8',
  
    ]
  
  };
  
   
  
  export function usesStyles(type) {
  
    if (typeof type === 'string') return bookOfStyles[type];
  
    else {
  
      const allStyles = type.map(style => bookOfStyles[style]);
  
      return allStyles.flat();
  
    }
  
  }