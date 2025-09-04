const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

/**
 * Ensures an admin exists with the provided credentials. If the admin exists,
 * the password is updated. If not, a new admin is created.
 *
 * @param {string} email
 * @param {string} password
 * @param {string} [name]
 */
async function ensureAdmin(email, password, name = "Administrator") {
  if (!email || !password) {
    throw new Error("ensureAdmin requires both email and password");
  }

  const existing = await Admin.findOne({ email });
  const hashedPassword = await bcrypt.hash(password, 10);

  if (!existing) {
    await Admin.create({ email, password: hashedPassword, name, role: "admin" });
    // eslint-disable-next-line no-console
    console.log(`Admin created: ${email}`);
    return;
  }

  existing.password = hashedPassword;
  if (!existing.name && name) existing.name = name;
  if (!existing.role) existing.role = "admin";
  await existing.save();
  // eslint-disable-next-line no-console
  console.log(`Admin updated: ${email}`);
}

module.exports = { ensureAdmin };


