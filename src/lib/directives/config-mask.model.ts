 export default class ConfigMaskModel {
   mask: string | undefined;
   len: number | undefined;
   person: boolean | undefined;
   phone: boolean | undefined;
   money: boolean | undefined;
   percent: boolean | undefined;
   type: 'alfa' | 'num' | 'all' = 'alfa';
   decimal: number = 2;
 }
