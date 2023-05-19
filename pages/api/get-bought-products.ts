import { NextApiHandler } from 'next';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

import { stripe } from '@/utils/stripe';
import { createOrRetrieveCustomer, getProductIds } from '@/utils/supabase-admin';
import { getURL } from '@/utils/helpers';

const GetBoughtProducts: NextApiHandler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const supabase = createServerSupabaseClient({ req, res });
            const {
                data: { user }
            } = await supabase.auth.getUser();

            const customer = await createOrRetrieveCustomer({
                uuid: user?.id || '',
                email: user?.email || ''
            });

            const ids = await getProductIds(customer);
            return res.status(200).json({ ids });
        } catch (e) {
            console.error("ERROR OCCURRED:", e)
        }
    } else {
        res.setHeader('Allow', 'GET');
        res.status(405).end('Method Not Allowed');
    }
};

export default GetBoughtProducts;
