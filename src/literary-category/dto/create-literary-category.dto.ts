import { LITERARY_WORKS_CATEGORY } from 'src/shared/constants';

export class CreateLiteraryCategoryDto {
  description: LITERARY_WORKS_CATEGORY;

  maxLoanDays: number;

  dailyFee: number;
}
