'use server'

export type CommissionState = {
  status: 'idle' | 'success' | 'error'
  message: string
  reference?: string
}

const allowed = {
  projectType: ['ghost-mannequin', 'editorial', 'jewelry', 'beauty', 'still-life'],
  volume: ['1-25', '26-100', '101-500', '500+'],
  colorSpace: ['srgb', 'adobe-rgb', 'prophoto', 'cmyk'],
  treatment: ['natural', 'refined', 'high-gloss'],
}

export async function submitCommission(_prev: CommissionState, formData: FormData): Promise<CommissionState> {
  const get = (key: string) => String(formData.get(key) ?? '').trim()

  const name = get('name')
  const email = get('email')
  const company = get('company')
  const projectType = get('projectType')
  const volume = get('volume')
  const colorSpace = get('colorSpace')
  const treatment = get('treatment')
  const brief = get('brief')

  if (!name || name.length > 120) return { status: 'error', message: 'Please provide your name.' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200)
    return { status: 'error', message: 'Please provide a valid studio email address.' }
  if (company.length > 160) return { status: 'error', message: 'House or agency name is too long.' }
  if (!allowed.projectType.includes(projectType)) return { status: 'error', message: 'Select a project type.' }
  if (!allowed.volume.includes(volume)) return { status: 'error', message: 'Select a garment volume.' }
  if (!allowed.colorSpace.includes(colorSpace)) return { status: 'error', message: 'Select a target color space.' }
  if (!allowed.treatment.includes(treatment)) return { status: 'error', message: 'Select a treatment preference.' }
  if (brief.length > 4000) return { status: 'error', message: 'Please keep the brief under 4,000 characters.' }

  const reference = `NIR-${Date.now().toString(36).toUpperCase().slice(-6)}`

  return {
    status: 'success',
    message: `Thank you, ${name}. Your brief has been received and a proposal will follow within one business day.`,
    reference,
  }
}
