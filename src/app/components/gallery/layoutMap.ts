// gallery layout size helper

export type LayoutSize = 'square'| 'wide' | 'tall' | 'full'

type LayoutClasses= {item: string, ratio:string};


export function mapLayout(size?: LayoutSize): LayoutClasses{
   
       const s = size ?? 'square';
            switch (s){
                case 'wide':
                    return{item:'md:col-span-2', ratio: 'aspect-[4/3]'};
                case 'tall':
                    return{item:'', ratio: 'aspect-[3/4]'};
                case 'full':
                    return{item:'md:col-span-2', ratio: 'aspect-[16/9]'};
                case 'square':
                        default:
                            return({item: '', ratio: 'aspect-square'})
            }
}