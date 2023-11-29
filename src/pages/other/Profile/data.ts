// images
import img1 from '@/assets/images/small/small-1.jpg'
import img2 from '@/assets/images/small/small-2.jpg'
import img3 from '@/assets/images/small/small-3.jpg'
import img4 from '@/assets/images/small/small-4.jpg'

interface ProfileActivity {
	time: string
	name: string
	title: string
	subName?: string
	image?: string[]
}

export const profileActivity: ProfileActivity[] = [
	{
		time: '5 minutes ago',
		name: 'Moses Haruna',
		title: 'Uploaded a photo',
		image: [img3, img4],
	},
	{
		time: '30 minutes ago',
		name: 'Fahad',
		title: 'commented your post.',
	},
	{
		time: '59 minutes ago',
		name: 'Carlos',
		title: 'attended a meeting with',
		subName: 'Aijuka.',
	},
	{
		time: '5 minutes ago',
		name: 'Ivan',
		title: 'Uploaded 2 new photos',
		image: [img2, img1],
	},
	{
		time: '30 minutes ago',
		name: 'Lewin',
		title: 'commented your post.',
	},
	{
		time: '59 minutes ago',
		name: 'Carlos',
		title: 'attended a meeting with',
		subName: 'Aijuka.',
	},
]
