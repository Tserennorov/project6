export const currencyController = async (req, res) => {
  try {
    console.log(res.locals.email);

    const { email, currency, userId } = req.body; // Get currency and userId from request body

    // Update the user's currency
    const result = await sql`
      UPDATE users 
      SET currency = ${currency} 
      WHERE userid = ${userId}
    `;

    // Check if the update was successful
    if (result.count > 0) {
      return res
        .status(200)
        .json({ message: "Currency updated successfully." });
    } else {
      return res
        .status(404)
        .json({ message: "User not found or currency not changed." });
    }
  } catch (error) {
    console.error("Error updating currency:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
