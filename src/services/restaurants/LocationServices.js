import zomatoAxios from "../../utils/zomatoAxios";

export const getAllLocations = async (location) => {
    try {
        const { data } = await zomatoAxios.get(`/cities?q=${location}`);
        return data.location_suggestions;
    } catch (e) {
        console.log(e);

    }
};

export const getLocation = async (locationId) => {
    try {
        const { data } = await zomatoAxios.get(
            `/location_details?entity_id=${locationId}&entity_type=city`
        );
        return data.best_rated_restaurant;
    } catch (e) {
        console.log(e);

    }
};
