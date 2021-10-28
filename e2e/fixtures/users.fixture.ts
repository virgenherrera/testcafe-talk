import { Credentials } from '../models/credentials.model';

export const validUser = new Credentials('standard_user', 'secret_sauce');

export const invalidUser = new Credentials('homework', 'not');
