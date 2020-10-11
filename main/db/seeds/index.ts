import 'module-alias/register';
import * as Knex from "knex";
import * as Models from '@/db/models/index'
import * as PasswordUtils from '@/utils/password';

import initialUser from '../../initialData/user.json';
import initialCategory from '../../initialData/category.json'
import initialSmartPhone from '../../initialData/smartPhone.json';
import initialTablet from '../../initialData/tablet.json';
import initialLaptop from '../../initialData/laptop.json';
import initialAccessories from '../../initialData/accessories.json';

export async function seed(knex: Knex): Promise<void> {
    // initial user
    const userData = initialUser.map((user) => {
        user.password = PasswordUtils.hashSync(user.password);
        return user;
    });
    await Models.User.query().insert(userData);

    // initial category
    await Models.Category.query().delete();
    await Models.Category.query().insert(initialCategory);

    /* initial product */
    await Models.Product.query().delete();
    const smartPhoneCategory = await Models.Category.query().findOne('name', 'smartPhone')
    const smartPhoneData = initialSmartPhone.map((smartPhone) => {
        return {
            ...smartPhone,
            categoryId: smartPhoneCategory.id
        }
    });
    await Models.Product.query().insert(smartPhoneData);

    const tabletCategory = await Models.Category.query().findOne('name', 'tablet');
    const tabletData = initialTablet.map((tablet) => {
        return {
            ...tablet,
            categoryId: tabletCategory.id
        }
    });
    await Models.Product.query().insert(tabletData);

    const laptopCategory = await Models.Category.query().findOne('name', 'laptop');
    const laptopData = initialLaptop.map((laptop) => {
        return {
            ...laptop,
            categoryId: laptopCategory.id
        }
    })
    await Models.Product.query().insert(laptopData);

    const accessoriesCategory = await Models.Category.query().findOne('name', 'accessories');
    const accessoriesData = initialAccessories.map((accessories) => {
        return {
            ...accessories,
            categoryId: accessoriesCategory.id
        }
    })
    await Models.Product.query().insert(accessoriesData);
};
