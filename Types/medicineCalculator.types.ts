export interface MedicineOption {
  label: string
  value: string
  itemAccessibilityLabelField: string
  type: 'tablet' | 'ml' | 'suppository'
  dosageMg: number
  dosageMl?: number
}
export interface AgeOption {
  label: string
  value: string
  accessibilityLabel: string
}
export interface WeightOption {
  label: string
  value: string
  accessibilityLabel: string
}

export interface TimesPerDay {
  label: string
  value: string
  maxDose?: number
}

export type AgeOptions = AgeOption[]
export type WeightOptions = WeightOption[]
export type TimesPerDays = TimesPerDay[]
export type MedicineOptions = MedicineOption[]
export type SwitchType = 'weight' | 'age'
