const userCredits = async (req, res) => {
  try {
    const clerkId = req.clerkId;
    const userData = await userModel.findOne({ clerkId });

    if (!userData) {
      return res.json({ success: false, message: 'User Not Found' });
    }

    res.json({ success: true, credits: userData.creditBalance });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

const paymentRazorpay = async (req, res) => {
  try {
    const clerkId = req.clerkId;
    const { planId } = req.body;

    const userData = await userModel.findOne({ clerkId });
    if (!userData || !planId) {
      return res.json({ success: false, message: 'Invalid Credentials' });
    }

    let credits, plan, amount;
    switch (planId) {
      case 'Basic':
        plan = 'Basic'; credits = 100; amount = 10;
        break;
      case 'Advanced':
        plan = 'Advanced'; credits = 500; amount = 50;
        break;
      case 'Business':
        plan = 'Business'; credits = 5000; amount = 250;
        break;
      default:
        return res.json({ success: false, message: 'Plan not found' });
    }

    const date = Date.now();
    const transactionData = { clerkId, plan, amount, credits, date };
    const newTransaction = await transactionModel.create(transactionData);

    const options = {
      amount: amount * 100,
      currency: process.env.CURRENCY,
      receipt: newTransaction._id,
    };

    razorpayInstance.orders.create(options, (error, order) => {
      if (error) return res.json({ success: false, message: error });
      res.json({ success: true, order });
    });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const paymentStripe = async (req, res) => {
  try {
    const clerkId = req.clerkId;
    const { planId } = req.body;
    const { origin } = req.headers;

    const userData = await userModel.findOne({ clerkId });
    if (!userData || !planId) {
      return res.json({ success: false, message: 'Invalid Credentials' });
    }

    let credits, plan, amount;
    switch (planId) {
      case 'Basic':
        plan = 'Basic'; credits = 100; amount = 10;
        break;
      case 'Advanced':
        plan = 'Advanced'; credits = 500; amount = 50;
        break;
      case 'Business':
        plan = 'Business'; credits = 5000; amount = 250;
        break;
      default:
        return res.json({ success: false, message: 'Plan not found' });
    }

    const date = Date.now();
    const transactionData = { clerkId, plan, amount, credits, date };
    const newTransaction = await transactionModel.create(transactionData);

    const line_items = [{
      price_data: {
        currency: process.env.CURRENCY.toLowerCase(),
        product_data: { name: "Credit Purchase" },
        unit_amount: amount * 100
      },
      quantity: 1
    }];

    const session = await stripeInstance.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&transactionId=${newTransaction._id}`,
      cancel_url: `${origin}/verify?success=false&transactionId=${newTransaction._id}`,
      line_items,
      mode: 'payment',
    });

    res.json({ success: true, session_url: session.url });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
