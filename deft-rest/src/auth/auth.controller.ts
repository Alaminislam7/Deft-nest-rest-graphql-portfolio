import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  RegisterDto,
} from './dto/create-auth.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}


}
