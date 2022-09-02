function orthogonal_distance_point(x1,y1,x2,y2, x3,y3) {
    let dx1 = (x1 - x2)
    let dy1 = (y1 - y2)

    let m1 = dy1 / dx1,
        m2 = -(1 / m1),
        c1 = (y1 - m1*x1),
        c2 = (y3 - m2*x3)
    
    let y = (m1*c2 - m2*c1) / (m1 - m2)
    let x = (c1 - c2) / (m2 - m1)               
    return {x,y}
    
}