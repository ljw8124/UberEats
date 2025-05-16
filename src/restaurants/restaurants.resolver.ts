import {Query, Resolver} from "@nestjs/graphql";
import {Restaurant} from "./entity/restaurant.entity";


@Resolver(of => Restaurant)
export class RestaurantsResolver {

    @Query(returns => Restaurant)
    myRestaurants() {
        return true;
    }
}
