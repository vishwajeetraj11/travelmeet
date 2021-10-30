import zomatoAxios from "../../utils/zomatoAxios";

export const getAllCategories = async () => {
    try {
        const { data } = await zomatoAxios.get(`/categories`);
        return data.categories;
    } catch (e) {
        console.log(e)
    }
};
export const getAllCuisines = async (locationId) => {
    try {
        const { data } = await zomatoAxios.get(`/cuisines?city_id=${locationId}`);
        return data.cuisines;
    } catch (e) {
        console.log(e)
    }
};

export const getAllRestaurants = async ({
    locationId,
    categoryId,
    cuisineName,
}) => {
    let data;
    try {
        if (categoryId !== 0 && cuisineName !== "Select Cuisine")
            data = await zomatoAxios.get(
                `/search?entity_id=${locationId}&entity_type=city&cuisines=${cuisineName}&category=${categoryId}`
            );
        else if (categoryId === 0 && cuisineName !== "Select Cuisine")
            data = await zomatoAxios.get(
                `/search?entity_id=${locationId}&entity_type=city&cuisines=${cuisineName}`
            );
        else if (categoryId !== 0 && cuisineName === "Select Cuisine")
            data = await zomatoAxios.get(
                `/search?entity_id=${locationId}&entity_type=city&category=${categoryId}`
            );
        else
            data = await zomatoAxios.get(
                `/search?entity_id=${locationId}&entity_type=city`
            );
        return data.data;
    } catch (e) {
        console.log(e);

    }
};

export const searchRestaurant = async ({ locationId, restaurantName }) => {
    try {
        const { data } = await zomatoAxios.get(
            `/search?entity_id=${locationId}&entity_type=city&q=${restaurantName}`
        );
        console.log(data);
        return data;
    } catch (e) {
        console.log(e)
    }
};

export const getRestaurant = async (restaurantId) => {
    try {
        const { data } = await zomatoAxios.get(
            `/restaurant?res_id=${restaurantId}`
        );
        return data;
    } catch (e) {
        console.log(e)
    }
};
