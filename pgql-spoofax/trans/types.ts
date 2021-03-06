module types

imports

  signatures/-

type rules

  VarRef(v) + GroupRef(v) + SelectOrGroupRef(v) + VarOrSelectRef(v) : ty
  where definition of v : ty

  PropRef(_, _) + BindVariable(_) : UnknownTy()

  Not(exp) : BooleanTy()
//  where exp : ty
//    and (ty == BooleanTy() or ty == UnknownTy()) else error $[Boolean expected here] on exp

  And(exp1, exp2) + Or(exp1, exp2) : BooleanTy()
//  where exp1 : ty1
//    and exp2 : ty2
//    and ((ty1 == BooleanTy() or ty1 == UnknownTy()) else error $[Boolean expected here] on exp1)
//    and ((ty2 == BooleanTy() or ty2 == UnknownTy()) else error $[Boolean expected here] on exp2)

  UMin(exp) : NumericTy()
//  where exp : ty
//    and (ty == NumericTy() or ty == UnknownTy()) else error $[Number expected here] on exp

  Mul(exp1, exp2) + Add(exp1, exp2) + Div(exp1, exp2) + Mod(exp1, exp2) + Sub(exp1, exp2) : NumericTy()
//  where exp1 : ty1
//    and exp2 : ty2
//    and (ty1 == NumericTy() or ty1 == UnknownTy()) else error $[Number expected here] on exp1
//    and (ty2 == NumericTy() or ty2 == UnknownTy()) else error $[Number expected here] on exp2

  t@Eq(exp1, exp2) + t@Neq(exp1, exp2) : BooleanTy()
//  where TODO

  t@Gt(exp1, exp2) + t@Lt(exp1, exp2) + t@Gte(exp1, exp2) + t@Lte(exp1, exp2) : BooleanTy()
//  where TODO

  COUNT(_, exp) + MIN(_, exp)  + MAX(_, exp)  + SUM(_, exp)  + AVG(_, exp) : ty
  where exp : ty

  Cast(_, _) + FunctionCall(_, _, _) + Legacy10CallStatement(_, _, _) + Star(): UnknownTy()

  True() + False()        : BooleanTy()
  Date(_)                 : DateTy()
  Integer(_) + Decimal(_) : NumericTy()
  String(_)               : StringTy()
  Time(_)                 : TimeTy()
  Timestamp(_)            : TimestampTy()
