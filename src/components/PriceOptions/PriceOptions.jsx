import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

	const priceOptions =
		[
			{
			  "id": 1,
			  "name": "Basic Plan",
			  "price": 29.99,
			  "features": [
				"Access to gym equipment",
				"Locker room access",
				"1 free fitness assessment",
				"Access during regular hours",
				"Free Wi-Fi",
				"Water refill station access",
				"Basic cardio and weight training zones"
			  ]
			},
			{
			  "id": 2,
			  "name": "Standard Plan",
			  "price": 49.99,
			  "features": [
				"Access to gym equipment",
				"Locker room access",
				"3 free fitness assessments",
				"Group fitness classes (Yoga, Pilates, Zumba)",
				"Access during extended hours",
				"Discount on personal training",
				"Free Wi-Fi and coffee lounge access",
				"Towel service",
				"Nutritional guidance"
			  ]
			},
			{
			  "id": 3,
			  "name": "Premium Plan",
			  "price": 79.99,
			  "features": [
				"Access to all gym equipment and zones",
				"Locker room with private showers and sauna",
				"Unlimited fitness assessments",
				"Group and specialized fitness classes",
				"Access to sauna, steam rooms, and pool",
				"Priority booking for classes",
				"Discount on supplements and personal training",
				"Personalized training plan",
				"Advanced cardio and strength training zones",
				"Free guest pass each month"
			  ]
			},
			{
			  "id": 4,
			  "name": "VIP Plan",
			  "price": 99.99,
			  "features": [
				"24/7 gym access",
				"Locker room with premium amenities (heated floors, rain showers)",
				"Unlimited fitness assessments and wellness coaching",
				"Group, specialized, and one-on-one classes",
				"Access to all amenities including sauna, jacuzzi, and pool",
				"Free personal training session each month",
				"Dedicated locker",
				"Priority customer support",
				"VIP lounge with complimentary snacks and drinks",
				"Monthly wellness workshops",
				"Body composition analysis"
			  ]
			},
			{
			  "id": 5,
			  "name": "Ultimate Plan",
			  "price": 149.99,
			  "features": [
				"24/7 gym access with unlimited access to all facilities",
				"Private locker room with spa amenities",
				"Unlimited fitness assessments, wellness coaching, and personal training",
				"Group, specialized, and personal training sessions",
				"Access to exclusive events and workshops",
				"Monthly health and wellness consultations",
				"Complimentary guest passes (5 per month)",
				"VIP parking and lounge access",
				"Private meditation and relaxation room",
				"Advanced nutritional and meal planning",
				"Quarterly health assessments with a dedicated trainer",
				"Access to virtual fitness classes and on-demand sessions"
			  ]
			}
		  ]

	return (
		<div>
			<h2 className="text-5xl" >Best Price in the town</h2>
			{
				priceOptions.map(option => <PriceOption key={option.id} option={option} ></PriceOption>)
			}
		</div>
	);
};

export default PriceOptions;