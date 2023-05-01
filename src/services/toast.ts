import toast from 'svelte-french-toast';

export class ToastService{
    #common: Parameters<typeof toast>[1] = {
        position: 'bottom-right'
    };

    success(message:string){
        toast.success(message, {
            ...this.#common
        })
    }

    error(message:string){
        toast.error(message, {
            ...this.#common
        })
    }
}

export default new ToastService();