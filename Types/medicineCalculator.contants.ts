import {
  AgeOptions,
  MedicineOptions,
  WeightOptions,
  TimesPerDays,
} from './medicineCalculator.types';

export const ageOptions: AgeOptions = [
  {
    label: '1-6 months',
    value: 'less-6',
    accessibilityLabel: 'between-1-and-6-months-old',
  },
  {
    label: 'over 6 months',
    value: 'over-6',
    accessibilityLabel: 'over-6-months-old',
  },
];

export const weightOptions: WeightOptions = [
  { label: 'kg', value: 'kg', accessibilityLabel: 'switch-to-kg' },
  { label: 'lb', value: 'lb', accessibilityLabel: 'switch-to-lb' },
];

export const medicineOptions: MedicineOptions = [
  {
    label: 'Acetaminophen Infant (80mg/ml)',
    value: 'acetaminophen-infant',
    itemAccessibilityLabelField: 'acetaminophen-infant-80mg-per-ml',
    type: 'ml',
    dosageMg: 80,
    dosageMl: 1,
  },
  {
    label: 'Acetaminophen Children (160mg/5ml)',
    value: 'acetaminophen-children',
    itemAccessibilityLabelField: 'acetaminophen-children-160mg-per-5ml',
    type: 'ml',
    dosageMg: 160,
    dosageMl: 5,
  },
  {
    label: 'Acetaminophen 80mg Chewable Tablet',
    value: 'acetaminophen-chew',
    itemAccessibilityLabelField: 'acetaminophen-80mg-chewable-tablet',
    type: 'tablet',
    dosageMg: 80,
  },
  {
    label: 'Acetaminophen 325mg Tablet',
    value: 'acetaminophen-325',
    itemAccessibilityLabelField: 'acetaminophen-325mg-tablet',
    type: 'tablet',
    dosageMg: 325,
  },
  {
    label: 'Acetaminophen 500mg Tablet',
    value: 'acetaminophen-500',
    itemAccessibilityLabelField: 'acetaminophen-500mg-tablet',
    type: 'tablet',
    dosageMg: 500,
  },
  {
    label: 'Acetaminophen 120mg Suppository',
    value: 'acetaminophen-120-sup',
    itemAccessibilityLabelField: 'acetaminophen-120mg-suppository',
    type: 'suppository',
    dosageMg: 120,
  },
  {
    label: 'Acetaminophen 180mg Suppository',
    value: 'acetaminophen-180-sup',
    itemAccessibilityLabelField: 'acetaminophen-180mg-suppository',
    type: 'suppository',
    dosageMg: 180,
  },
  {
    label: 'Ibuprofen Infant (200mg/5ml)',
    value: 'ibuprofen-infant',
    itemAccessibilityLabelField: 'ibuprofen-infant-200mg-per-5ml',
    type: 'ml',
    dosageMg: 200,
    dosageMl: 5,
  },
  {
    label: 'Ibuprofen Children (100mg/5ml)',
    value: 'ibuprofen-children',
    itemAccessibilityLabelField: 'ibuprofen-children-100mg-per-5ml',
    type: 'ml',
    dosageMg: 100,
    dosageMl: 5,
  },
  {
    label: 'Ibuprofen 100mg Chewable Tablet',
    value: 'ibuprofen-chew',
    itemAccessibilityLabelField: 'ibuprofen-100mg-chewable-tablet',
    type: 'tablet',
    dosageMg: 100,
  },
  {
    label: 'Ibuprofen 200mg Tablet',
    value: 'ibuprofen-200',
    itemAccessibilityLabelField: 'ibuprofen-200mg-tablet',
    type: 'tablet',
    dosageMg: 200,
  },
  {
    label: 'Ibuprofen 400mg Tablet',
    value: 'ibuprofen-400',
    itemAccessibilityLabelField: 'ibuprofen-400mg-tablet',
    type: 'tablet',
    dosageMg: 400,
  },
];

export const timesPerDay: TimesPerDays = [
  { label: '8 hours', value: 'less-6' },
  { label: '6 hours', value: 'over-6' },
  { label: '4 hours', value: 'acetaminophen', maxDose: 5 },
];
