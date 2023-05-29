import { CoreEntity } from 'src/common/entities/core.entity';

export class User extends CoreEntity {
  name: string;
  email: string;
  password?: string;
  shop_id?: number;
  is_active?: boolean = true;
}
