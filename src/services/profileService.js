import { profile } from '../data/profile'
import { getCompletedExperienceYears } from '../utils/experienceUtils'

export const getProfile = (language = 'es') => ({
	...profile,
	yearsExperience: getCompletedExperienceYears(profile.experienceStartDate),
	availability: profile.availability[language],
	intro: profile.intro[language],
	bio: profile.bio[language],
	strengths: profile.strengths[language],
})